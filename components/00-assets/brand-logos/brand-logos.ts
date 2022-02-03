export enum Brand {
  YOGA_JOURNAL,
  OXYGEN_MAG,
  CLEAN_EATING,
  VEG_TIMES,
  BACKPACKER,
  CLIMBING,
  GAIA_GPS,
  NAT_PARK_TRIPS,
  OUTSIDE_TV,
  OUTSIDE,
  SKI_MAG,
  WARREN_MILLER,
  FLY_FILM_TOUR,
  BETA,
  CYCLING_TIPS,
  PELOTON_MAG,
  PINK_BIKE,
  TRAIL_FORKS,
  TRAIL_RUNNER,
  TRIATHLETE,
  VELO_NEWS,
  WOMENS_RUNNING,
  ATHLETE_REG,
  BRAIN,
  FINISHER_PIX,
  CAIRN,
  IDEA_FIT,
  NASTAR,
  OUTSIDE_BUS_JOURNAL,
  OUTSIDE_MARKETPLACE,
  ROLL_MASSIF,
  VELO_PRESS,
  VELO_SWAP
}

export type BrandString = keyof typeof Brand;

export type BrandLogo = {
  id: number;
  brand: BrandString;
  brandLabel: string;
  link: string;
  image: string;
  alt: string;
  category: string;
};

type BrandLogoConfig = {
  [k in BrandString]: BrandLogo;
};

export const BRAND_LOGOS: BrandLogoConfig = {
  YOGA_JOURNAL: {
    id: 1,
    brand: 'YOGA_JOURNAL',
    brandLabel: 'Yoga Journal',
    link: 'https://www.yogajournal.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/yj.svg',
    alt: 'Yoga Journal logo',
    category: 'healthy-living'
  },
  OXYGEN_MAG: {
    id: 2,
    brand: 'OXYGEN_MAG',
    brandLabel: 'Oxygen Magazine',
    link: 'http://www.oxygenmag.com/',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/oxy.svg',
    alt: 'Oxygen Mag logo',
    category: 'healthy-living'
  },
  CLEAN_EATING: {
    id: 4,
    brand: 'CLEAN_EATING',
    brandLabel: 'Clean Eating',
    link: 'https://www.cleaneatingmag.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/ce.svg',
    alt: 'Clean Eating Mag logo',
    category: 'healthy-living'
  },
  VEG_TIMES: {
    id: 8,
    brand: 'VEG_TIMES',
    brandLabel: 'Vegetarian Times',
    link: 'https://www.vegetariantimes.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/vt.svg',
    alt: 'Vegetarian Times logo',
    category: 'healthy-living'
  },
  BACKPACKER: {
    id: 12,
    brand: 'BACKPACKER',
    brandLabel: 'Backpacker',
    link: 'https://www.backpacker.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/bp.svg',
    alt: 'Backpacker logo',
    category: 'outdoor'
  },
  CLIMBING: {
    id: 13,
    brand: 'CLIMBING',
    brandLabel: 'Climbing',
    link: 'https://www.climbing.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/clm.svg',
    alt: 'Climbing logo',
    category: 'outdoor'
  },
  GAIA_GPS: {
    id: 14,
    brand: 'GAIA_GPS',
    brandLabel: 'Gaia GPS',
    link: 'https://www.gaiagps.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/gaia.svg',
    alt: 'GaiaGPS logo',
    category: 'outdoor'
  },
  NAT_PARK_TRIPS: {
    id: 16,
    brand: 'NAT_PARK_TRIPS',
    brandLabel: 'National Park Trips',
    link: 'https://www.nationalparktrips.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/npt.svg',
    alt: 'National Park Trips logo',
    category: 'outdoor'
  },
  OUTSIDE_TV: {
    id: 17,
    brand: 'OUTSIDE_TV',
    brandLabel: 'Outside TV',
    link: 'http://www.outsidetv.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/otv.svg',
    alt: 'OutsideTV logo',
    category: 'outdoor'
  },
  OUTSIDE: {
    id: 18,
    brand: 'OUTSIDE',
    brandLabel: 'Outside',
    link: 'https://www.outsideonline.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/out.svg',
    alt: 'Outside logo',
    category: 'outdoor'
  },
  SKI_MAG: {
    id: 20,
    brand: 'SKI_MAG',
    brandLabel: 'Ski Magazine',
    link: 'https://www.skimag.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/ski.svg',
    alt: 'Ski Mag logo',
    category: 'outdoor'
  },
  WARREN_MILLER: {
    id: 21,
    brand: 'WARREN_MILLER',
    brandLabel: 'Warren Miller',
    link: 'https://warrenmiller.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/wm.svg',
    alt: 'Warren Miller logo',
    category: 'outdoor'
  },
  FLY_FILM_TOUR: {
    id: 22,
    brand: 'FLY_FILM_TOUR',
    brandLabel: 'Fly Film Tour',
    link: 'https://flyfilmtour.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/ff.svg',
    alt: 'Fly Film Tour logo',
    category: 'outdoor'
  },
  BETA: {
    id: 23,
    brand: 'BETA',
    brandLabel: 'Beta',
    link: 'https://www.betamtb.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/beta.svg',
    alt: 'Beta logo',
    category: 'endurance'
  },
  CYCLING_TIPS: {
    id: 24,
    brand: 'CYCLING_TIPS',
    brandLabel: 'Cycling Tips',
    link: 'https://cyclingtips.com',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/cyclingtips.svg',
    alt: 'CyclingTips logo',
    category: 'endurance'
  },
  PELOTON_MAG: {
    id: 25,
    brand: 'PELOTON_MAG',
    brandLabel: 'Peloton Magazine',
    link: 'https://pelotonmagazine.com',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/peloton.svg',
    alt: 'Peloton logo',
    category: 'endurance'
  },
  PINK_BIKE: {
    id: 26,
    brand: 'PINK_BIKE',
    brandLabel: 'PinkBike',
    link: 'https://www.pinkbike.com/',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/pinkbike-1.svg',
    alt: 'Pinkbike logo',
    category: 'endurance'
  },
  TRAIL_FORKS: {
    id: 28,
    brand: 'TRAIL_FORKS',
    brandLabel: 'Trail Forks',
    link: 'https://www.trailforks.com/',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/trailforks.svg',
    alt: 'Trailforks logo',
    category: 'endurance'
  },
  TRAIL_RUNNER: {
    id: 29,
    brand: 'TRAIL_RUNNER',
    brandLabel: 'Trail Runner Magazine',
    link: 'https://www.trailrunnermag.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/tr.svg',
    alt: 'TrailRunner Mag logo',
    category: 'endurance'
  },
  TRIATHLETE: {
    id: 30,
    brand: 'TRIATHLETE',
    brandLabel: 'Triathlete',
    link: 'https://www.triathlete.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/tri.svg',
    alt: 'Triathlete logo',
    category: 'endurance'
  },
  VELO_NEWS: {
    id: 31,
    brand: 'VELO_NEWS',
    brandLabel: 'Velonews',
    link: 'https://www.velonews.com',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/velonews.svg',
    alt: 'Velonews logo',
    category: 'endurance'
  },
  WOMENS_RUNNING: {
    id: 32,
    brand: 'WOMENS_RUNNING',
    brandLabel: "Women's Running",
    link: 'https://www.womensrunning.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/wr.svg',
    alt: 'Womens Running logo',
    category: 'endurance'
  },
  ATHLETE_REG: {
    id: 33,
    brand: 'ATHLETE_REG',
    brandLabel: 'AthleteReg',
    link: 'https://www.athletereg.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/ar.svg',
    alt: 'AthleteReg logo',
    category: 'industry'
  },
  BRAIN: {
    id: 34,
    brand: 'BRAIN',
    brandLabel: 'Bicycle Retailer',
    link: 'https://www.bicycleretailer.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/brain.svg',
    alt: 'Bicycle Retailer logo',
    category: 'industry'
  },
  FINISHER_PIX: {
    id: 35,
    brand: 'FINISHER_PIX',
    brandLabel: 'FinisherPix',
    link: 'https://www.finisherpix.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/fp.svg',
    alt: 'Finisherpix logo',
    category: 'industry'
  },
  CAIRN: {
    id: 36,
    brand: 'CAIRN',
    brandLabel: 'Cairn',
    link: 'https://www.getcairn.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/cairn.svg',
    alt: 'Cairn logo',
    category: 'industry'
  },
  IDEA_FIT: {
    id: 37,
    brand: 'IDEA_FIT',
    brandLabel: 'Idea Fit',
    link: 'https://www.ideafit.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/idea.svg',
    alt: 'IdeaFit logo',
    category: 'industry'
  },
  NASTAR: {
    id: 38,
    brand: 'NASTAR',
    brandLabel: 'NASTAR',
    link: 'https://www.nastar.com',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/nastar.svg',
    alt: 'NASTAR logo',
    category: 'industry'
  },
  OUTSIDE_BUS_JOURNAL: {
    id: 39,
    brand: 'OUTSIDE_BUS_JOURNAL',
    brandLabel: 'Outside Business Journal',
    link: 'https://www.outsidebusinessjournal.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/obj.svg',
    alt: 'Outside Business Journal logo',
    category: 'industry'
  },
  OUTSIDE_MARKETPLACE: {
    id: 40,
    brand: 'OUTSIDE_MARKETPLACE',
    brandLabel: 'Outside Marketplace',
    link: 'https://www.pinkbike.com/buysell/',
    image:
      'https://www.outsideonline.com/wp-content/uploads/2022/01/marketplace.svg',
    alt: 'Outside Marketplace logo',
    category: 'industry'
  },
  ROLL_MASSIF: {
    id: 41,
    brand: 'ROLL_MASSIF',
    brandLabel: 'Roll Massif',
    link: 'https://www.rollmassif.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/rm.svg',
    alt: 'Roll Massif logo',
    category: 'industry'
  },
  VELO_PRESS: {
    id: 42,
    brand: 'VELO_PRESS',
    brandLabel: 'VeloPress',
    link: 'https://www.velopress.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/vp.svg',
    alt: 'VeloPress logo',
    category: 'industry'
  },
  VELO_SWAP: {
    id: 43,
    brand: 'VELO_SWAP',
    brandLabel: 'VeloSwap',
    link: 'https://www.veloswap.com',
    image: 'https://www.outsideonline.com/wp-content/uploads/2022/01/vs.svg',
    alt: 'VeloSwap logo',
    category: 'industry'
  }
};

export const BRAND_LOGOS_LIST: BrandLogo[] = Object.values(BRAND_LOGOS);
