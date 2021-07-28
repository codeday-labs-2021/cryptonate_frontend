import {Campaign} from "../campaigns";

export interface Donation {
  _id: string;
  campaign_id: Campaign;
  amount_donated: number;
  date_donated: Date;
}
