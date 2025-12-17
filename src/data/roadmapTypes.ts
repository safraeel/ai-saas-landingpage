export type RoadmapSection = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  summary: string;
  steps: string[];
};

export type Roadmap = {
  id: 'html' | 'css' | 'javascript' | 'react' | 'tools';
  title: string;
  level: string;
  description: string;
  sections: RoadmapSection[];
};
