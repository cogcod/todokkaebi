// 게이지 바
export interface GaugeBarProps {
  value: number; // 현재 값
  max: number; // 최대 값
}

// GET_ALL_PROJECTS
export interface ProjectsData {
  success: boolean;
  projects: Projects[];
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
