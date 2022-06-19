import { Injectable, NotFoundException } from '@nestjs/common';
// import { MerchantsService } from 'src/merchants/merchants.service';
import { CampaignModel } from './campaign.interface';

@Injectable()
export class CampaignsService {

	// constructor(private readonly merchantsService: MerchantsService) { }

	private campaigns: Array<CampaignModel> = [
		{
			id: 'fb3df534-fb8a-496a-9323-6d2160916adc',
			slug: 'adidas-campaign-1',
			merchantId: '11f41595-1760-4014-82d8-fda8714fec43',
			// merchant: this.merchantsService.findBySlug('adidas'),
			imageUrl: '',
			title: 'Adidas Campaign 1',
			price: 500
		},
		{
			id: '6bdb765f-f6f2-4e4c-90b9-904d05f381b2',
			slug: 'adidas-campaign-2',
			merchantId: '11f41595-1760-4014-82d8-fda8714fec43',
			// merchant: this.merchantsService.findBySlug('adidas'),
			imageUrl: '',
			title: 'Adidas Campaign 2',
			price: 600
		},
		{
			id: 'fd57423a-0f5d-4315-abcc-266e87ee6beb',
			slug: 'etam-campaign-1',
			merchantId: '599bd732-9fde-492e-ae5b-1ade0f65737f',
			// merchant: this.merchantsService.findBySlug('etam'),
			imageUrl: '',
			title: 'Etam Campaign 1',
			price: 500
		},
		{
			id: '34573dff-5d49-4518-9005-e8f794359f25',
			slug: 'schott-campaign-1',
			merchantId: 'de240982-2648-4171-bd25-2f1c0fa249d2',
			// merchant: this.merchantsService.findBySlug('schott'),
			imageUrl: '',
			title: 'Schott Campaign 1',
			price: 300
		},
		{
			id: 'ecb64767-e9bb-47b1-a03c-92c19b1b3d48',
			slug: 'schott-campaign-2',
			merchantId: 'de240982-2648-4171-bd25-2f1c0fa249d2',
			// merchant: this.merchantsService.findBySlug('schott'),
			imageUrl: '',
			title: 'Schott Campaign 2',
			price: 400
		},
		{
			id: '9552529f-8076-4479-943e-65f583c2855c',
			slug: 'schott-campaign-3',
			merchantId: 'de240982-2648-4171-bd25-2f1c0fa249d2',
			// merchant: this.merchantsService.findBySlug('schott'),
			imageUrl: '',
			title: 'Schott Campaign 3',
			price: 500
		}
	]

	public findAll(): Array<CampaignModel> {
		return this.campaigns
	}

	public findOne(id: string): CampaignModel {
		const campaign: CampaignModel = this.campaigns.find(c => c.id === id)

		if (!campaign)
			throw new NotFoundException('Campaign not found.')

		return campaign
	}

	public findCampaignByMerchant(id: string): Array<CampaignModel> {
		return this.campaigns.filter(c => c.merchantId === id)
	}
}
