import {IssueStatus} from "../types/IssueStatus";

export interface Issue {
  id: number;
  name: string;
  description: string;
  status: IssueStatus;
}
