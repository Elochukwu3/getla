type Data = {
  id: number;
  email: string;
  team_name: string;
  phone_number: string;
  project_topic: string;
  group_size: number;
  privacy_poclicy_accepted: boolean;
  date_created?: string;
  last_updated?: string;
  category: number;
};

type Result = {
  responseData: any;
  error: Error | null;
  isLoading: boolean;
};
export type { Data, Result };
