import { Injectable, NotFoundException } from '@nestjs/common'
import { MerchantModel } from './merchants.interface'

const APP_FILES = 'http://[::1]:3000/files'

@Injectable()
export class MerchantsService {
	private merchants: Array<MerchantModel> = [
		{
			id: '11f41595-1760-4014-82d8-fda8714fec43',
			name: 'Adidas Originals',
			slug: 'adidas',
			logoUrl: `${APP_FILES}/adidas-logo.jpg`,
			bannerUrl: `${APP_FILES}/adidas-banner.png`
		},
		{
			id: '599bd732-9fde-492e-ae5b-1ade0f65737f',
			name: 'Etam',
			slug: 'etam',
			logoUrl: `${APP_FILES}/etam-logo.png`,
			bannerUrl: `${APP_FILES}/etam-banner.jpg`
		},
		{
			id: 'de240982-2648-4171-bd25-2f1c0fa249d2',
			name: 'Schott',
			slug: 'schott',
			logoUrl: `${APP_FILES}/schott-logo.jpg`,
			bannerUrl: `${APP_FILES}/schott-banner.webp`
		}
	]

	public findAll(): Array<MerchantModel> {
		return this.merchants
	}

	public findOne(id: string): MerchantModel {
		const merchant: MerchantModel = this.merchants.find(m => m.id === id)

		if (!merchant)
			throw new NotFoundException('Merchant not found.')

		return merchant
	}

	public findBySlug(slug: string): MerchantModel {
		const merchant: MerchantModel = this.merchants.find(m => m.slug === slug)

		if (!merchant)
			throw new NotFoundException('Merchant not found.')

		return merchant
	}
}

