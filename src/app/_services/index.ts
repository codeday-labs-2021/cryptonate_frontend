import {AuthService} from './authentication.service';
import {AdminService} from './admin.service';
import {CampaignService}  from './campaign.service';
// import {Web3Service} from './web3.service';
import {UserService} from './user.service';
import {DonationService} from './donation.service';
import {ApiService} from './api.service';

export const services = [AuthService,
    AdminService, 
    CampaignService, 
    // Web3Service,
    UserService,
    DonationService,
    ApiService];

export {AuthService} from './authentication.service';
export {AdminService} from './admin.service';
export {CampaignService}  from './campaign.service';
// export {Web3Service} from './web3.service';
export {UserService} from './user.service';
export {DonationService} from './donation.service';
export {ApiService} from './api.service';