// 게이지 바
export interface GaugeBarProps {
  value: number; // 현재 값
  max: number; // 최대 값
}

// GET_ALL_PROJECTS : 대분류
export interface ProjectsData {
  success: boolean;
  projects: [];
}
export interface Projects {
  id: string;
  name: string;
  userId: string;
  totalTask: number;
  completeTask: number;
  endDate: string; // UTC
  startDate: string; // UTC
}

// GET_PROJECT_DETAIL : 대분류 상세
export interface ProjectDetail {
  id: string;
  name: string;
  userId: string;
  totalTask: number;
  completeTask: number;
  endDate: string;
  startDate: string;
  categories: Categories[];
}
export interface Categories {
  id: string;
  name: string;
  projectId: string;
  actualEndDate: string;
  actualStartDate: string;
  startedAt: string;
  endedAt: string;
  tasks: Tasks[];
}
export interface Tasks {
  id: string;
  actualStartDate: string;
  actualEndDate: string;
  startDate: string;
  endDate: string;
  title: string;
  check: string;
  status: string;
  categoryId: string;
}
