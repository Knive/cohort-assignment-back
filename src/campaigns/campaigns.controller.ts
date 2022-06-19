import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CampaignModel } from './campaign.interface';
import { CampaignsService } from './campaigns.service';

@Controller('campaigns')
export class CampaignsController {
	constructor(private readonly campaignsService: CampaignsService) {}

	@Get()
	public findAll(): Array<CampaignModel> {
		return this.campaignsService.findAll()
	}

	@Get(':id')
	public findOne(@Param('id', ParseUUIDPipe) id: string): CampaignModel {
		return this.campaignsService.findOne(id);
	}
}
