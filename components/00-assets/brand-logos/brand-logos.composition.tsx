import React from 'react';
import { Image } from '../../01-atoms/Image';
import { BRAND_LOGOS_LIST, BrandLogo } from './brand-logos';

type CategorizedLogos = {
  [key: string]: BrandLogo[];
};

const categorized = BRAND_LOGOS_LIST.reduce((acc, brand) => {
  const key = brand.category;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(brand);
  return acc;
}, {} as CategorizedLogos);

export const BasicBrandLogos = () => (
  <div className="bg-network-black p-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      <div className="text-center">
        <h5 className="u-text--uppercase-sm tracking-normal text-network-grey-darker mb-5">
          Healthy Living
        </h5>
        <ul className="flex flex-col space-y-7 items-center">
          {categorized['healthy-living'].map((item) => (
            <li className="list-none hover:opacity-80" key={item.id}>
              <a href={item.link}>
                <Image src={item.image} alt={item.alt} shouldLazyLoad />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <h5 className="u-text--uppercase-sm tracking-normal text-network-grey-darker mb-5">
          Outdoor
        </h5>
        <ul className="flex flex-col space-y-7 items-center">
          {categorized.outdoor.map((item) => (
            <li className="list-none hover:opacity-80" key={item.id}>
              <a className="hover:opacity-80" href={item.link}>
                <Image src={item.image} alt={item.alt} shouldLazyLoad />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <h5 className="u-text--uppercase-sm tracking-normal text-network-grey-darker mb-5">
          Endurance
        </h5>
        <ul className="flex flex-col space-y-7 items-center">
          {categorized.endurance.map((item) => (
            <li className="list-none hover:opacity-80" key={item.id}>
              <a className="hover:opacity-80" href={item.link}>
                <Image src={item.image} alt={item.alt} shouldLazyLoad />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <h5 className="u-text--uppercase-sm tracking-normal text-network-grey-darker mb-5">
          Industry
        </h5>
        <ul className="flex flex-col space-y-7 items-center">
          {categorized.industry.map((item) => (
            <li className="list-none hover:opacity-80" key={item.id}>
              <a className="hover:opacity-80" href={item.link}>
                <Image src={item.image} alt={item.alt} shouldLazyLoad />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
