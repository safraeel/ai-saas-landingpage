import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    // Get session to verify user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('generated_content');
    
    // Fetch user's content history, sorted by creation date (newest first)
    const history = await collection
      .find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .limit(50) // Limit to last 50 entries
      .toArray();

    // Convert ObjectId to string and format dates
    const formattedHistory = history.map(item => ({
      ...item,
      id: item._id.toString(),
      createdAt: item.createdAt,
    }));

    return NextResponse.json(formattedHistory);
  } catch (error) {
    console.error('Error fetching history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch history' },
      { status: 500 }
    );
  }
}