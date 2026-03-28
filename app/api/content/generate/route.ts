import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { GeneratedContent } from '@/types';

interface GenerateRequest {
  idea: string;
  platforms: string[];
  userId: string;
}

export async function POST(request: Request) {
  try {
    const { idea, platforms, userId }: GenerateRequest = await request.json();

    if (!idea || !platforms || platforms.length === 0 || !userId) {
      return NextResponse.json(
        { error: 'Idea, platforms, and userId are required' },
        { status: 400 }
      );
    }

    // Generate mock content based on the idea
    const generatedContent: GeneratedContent = {
      id: Date.now().toString(),
      userId,
      idea,
      platforms,
      content: {
        tiktok: generateTikTokContent(idea),
        instagram: generateInstagramContent(idea),
        linkedin: generateLinkedInContent(idea),
      },
      createdAt: new Date(),
    };

    // Save to database
    const { db } = await connectToDatabase();
    const collection = db.collection('generated_content');
    
    await collection.insertOne({
      ...generatedContent,
      createdAt: new Date(),
    });

    // Filter content based on selected platforms
    const responseContent: any = {};
    
    if (platforms.includes('tiktok')) {
      responseContent.tiktok = generatedContent.content.tiktok;
    }
    
    if (platforms.includes('instagram')) {
      responseContent.instagram = generatedContent.content.instagram;
    }
    
    if (platforms.includes('linkedin')) {
      responseContent.linkedin = generatedContent.content.linkedin;
    }

    return NextResponse.json({
      success: true,
      data: {
        ...generatedContent,
        content: responseContent,
      },
    });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

// Helper functions to generate mock content
function generateTikTokContent(idea: string) {
  const hooks = [
    `Stop scrolling! ${idea} just got a major upgrade!`,
    `This ${idea} hack will change your life forever!`,
    `I tried ${idea} for 30 days and here's what happened...`,
    `The secret to mastering ${idea} that no one talks about!`,
    `You won't believe what I discovered about ${idea}!`,
    `3 ways to level up your ${idea} game starting today!`,
    `This ${idea} mistake is costing you thousands!`,
    `The ultimate ${idea} guide in 60 seconds!`,
    `I tested every ${idea} method and this one wins!`,
    `Your ${idea} strategy is wrong - here's the fix!`
  ];
  
  const captions = [
    `If you're into ${idea}, you need to see this! 💯`,
    `Game changer for anyone doing ${idea}! 🚀`,
    `This ${idea} tip saved me hours every week!`,
    `The ${idea} community needs to know about this!`,
    `I wish I knew this ${idea} trick sooner!`,
    `Leveling up my ${idea} game one day at a time!`,
    `This ${idea} strategy actually works!`,
    `Sharing my favorite ${idea} hack with you!`,
    `The ${idea} method that actually delivers results!`,
    `If you do ${idea}, watch this before it's too late!`
  ];
  
  return {
    hooks: shuffleArray(hooks).slice(0, 3),
    captions: shuffleArray(captions).slice(0, 2),
  };
}

function generateInstagramContent(idea: string) {
  const bios = [
    `Helping people master ${idea} 🚀 | Turning ideas into reality 💡 | Daily tips & tricks ✨`,
    `Your go-to for all things ${idea} 🎯 | Simplifying complexity one post at a time 📱`,
    `Making ${idea} accessible to everyone 🌟 | Creator & educator 📚 | Let's grow together! 🌱`,
    `Passionate about ${idea} innovation 🚀 | Sharing insights & strategies 💭 | Building the future 🏗️`,
    `Transforming ${idea} one step at a time 🎯 | Educator & creator 📖 | Making an impact 🌍`
  ];
  
  const captions = [
    `Just discovered the most effective way to approach ${idea}! 🚀 This is a game changer for anyone looking to level up their skills. What's your favorite ${idea} tip? #learning #growth`,
    `Sometimes the simplest ${idea} strategies are the most powerful. Taking small steps every day leads to massive results over time. What are you working on today? 💪 #progressnotperfection`,
    `The journey of mastering ${idea} is filled with ups and downs, but every challenge is an opportunity to grow. Keep pushing forward! 🌟 #nevergiveup #motivation`,
    `Sharing a quick ${idea} insight that completely changed my perspective. Sometimes all it takes is one small shift to see things differently. What's your breakthrough moment? 🤔 #inspiration`,
    `Building something amazing with ${idea} every single day. The process is just as important as the result. What are you building? 🏗️ #creatorlife #hustle`
  ];
  
  const hashtags = [
    `#${idea.replace(/\s+/g, '').toLowerCase()}`,
    '#growth',
    '#success',
    '#motivation',
    '#entrepreneur',
    '#business',
    '#innovation',
    '#learning',
    '#tips',
    '#strategy',
    '#goals',
    '#mindset',
    '#productivity',
    '#hustle',
    '#grind'
  ];
  
  return {
    bio: bios[Math.floor(Math.random() * bios.length)],
    captions: shuffleArray(captions).slice(0, 3),
    hashtags: shuffleArray(hashtags).slice(0, 8),
  };
}

function generateLinkedInContent(idea: string) {
  const posts = [
    `I recently had an epiphany about ${idea} that completely shifted my perspective. In today's fast-paced world, we often focus on the "what" and forget about the "why." Taking a step back to understand the fundamental principles behind ${idea} has been transformative for my approach. What's one fundamental principle in your field that you think gets overlooked?`,
    
    `The landscape of ${idea} is evolving rapidly, and staying ahead requires continuous learning and adaptation. I've found that the most successful professionals in this space share one common trait: they're not afraid to challenge conventional wisdom. They ask "why" instead of just accepting "how." This mindset has led to some of the most innovative breakthroughs in ${idea}. What conventional wisdom in your industry needs to be challenged?`,
    
    `Building expertise in ${idea} isn't about knowing all the answers—it's about asking the right questions and being willing to learn from every experience. I've made plenty of mistakes along the way, but each one has taught me something valuable. The key is to view failures as stepping stones rather than roadblocks. What's the most valuable lesson you've learned from a mistake?`,
    
    `In the world of ${idea}, collaboration is becoming increasingly important. The most innovative solutions often come from diverse perspectives working together. I've been fortunate to work with some incredible minds who've challenged my thinking and pushed me to be better. Surround yourself with people who inspire you to grow. Who are the people in your network that challenge you to be better?`,
    
    `The future of ${idea} is incredibly exciting, but it also comes with its challenges. As technology advances and the landscape shifts, adaptability will be the most valuable skill. Those who can pivot quickly and embrace change will be the ones who thrive. What skills do you think will be most important in the next 5 years in your field?`
  ];
  
  return {
    posts: shuffleArray(posts).slice(0, 2),
  };
}

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}