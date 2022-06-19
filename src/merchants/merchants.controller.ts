import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CampaignModel } from 'src/campaigns/campaign.interface';
import { CampaignsService } from 'src/campaigns/campaigns.service';
import { MerchantModel } from './merchants.interface';
import { MerchantsService } from './merchants.service';

@Controller('merchants')
export class MerchantsController {
	constructor(private readonly merchantsService: MerchantsService, private readonly campaignsService: CampaignsService) {}

	@Get()
	public findAll(): Array<MerchantModel> {
		return this.merchantsService.findAll()
	}

	@Get(':id')
	public findOne(@Param('id', ParseUUIDPipe) id: string): MerchantModel {
		return this.merchantsService.findOne(id)
	}

	@Get(':id/campaigns')
	public findCampaignsByMerchantId(@Param('id', ParseUUIDPipe) id: string): Array<CampaignModel> {
		return this.campaignsService.findCampaignByMerchant(id)
	}
}
