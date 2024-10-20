import { MotorcycleRecommendation } from '../types';

export function getRecommendations(answers: Record<string, string>): MotorcycleRecommendation[] {
  const recommendations: MotorcycleRecommendation[] = [];

  // City commuting
  if (answers['riding-style'] === 'City commuting') {
    recommendations.push(
      {
        model: 'Honda CB300R',
        description: 'A lightweight and nimble bike perfect for city riding.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-honda-cb300r/',
      },
      {
        model: 'Vespa GTS 300',
        description: 'A stylish and practical scooter for urban environments.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-vespa-gts-300-hpe/',
      },
      {
        model: 'Yamaha MT-07',
        description: 'A versatile naked bike with plenty of torque for city streets.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-yamaha-mt-07/',
      }
    );
  }

  // Highway cruising
  if (answers['riding-style'] === 'Highway cruising') {
    recommendations.push(
      {
        model: 'Harley-Davidson Street Glide',
        description: 'A comfortable cruiser built for long-distance rides.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-harley-davidson-street-glide/',
      },
      {
        model: 'BMW R 1250 RT',
        description: 'A luxurious touring bike with advanced technology for smooth highway rides.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-bmw-r-1250-rt/',
      },
      {
        model: 'Indian Challenger',
        description: 'A powerful bagger with a comfortable ride for long journeys.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-indian-challenger/',
      }
    );
  }

  // Off-road adventures
  if (answers['riding-style'] === 'Off-road adventures') {
    recommendations.push(
      {
        model: 'KTM 350 EXC-F',
        description: 'A versatile enduro bike that excels in off-road conditions.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-ktm-350-exc-f/',
      },
      {
        model: 'Honda CRF450L',
        description: 'A street-legal dirt bike that is equally capable on trails and roads.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-honda-crf450l/',
      },
      {
        model: 'BMW R 1250 GS Adventure',
        description: 'A premium adventure bike built for long-distance off-road touring.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-bmw-r-1250-gs-adventure/',
      }
    );
  }

  // Sport riding
  if (answers['riding-style'] === 'Sport riding') {
    recommendations.push(
      {
        model: 'Yamaha YZF-R6',
        description: 'A high-performance sportbike built for speed and agility.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-yamaha-yzf-r6/',
      },
      {
        model: 'Ducati Panigale V4',
        description: 'A cutting-edge superbike with race-derived technology.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-ducati-panigale-v4/',
      },
      {
        model: 'Kawasaki Ninja ZX-10R',
        description: 'A track-focused sportbike with advanced electronics and aerodynamics.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-kawasaki-ninja-zx-10r/',
      }
    );
  }

  // Budget considerations
  if (answers['budget'] === 'Under $5,000') {
    recommendations.push(
      {
        model: 'Kawasaki Ninja 400',
        description: 'An affordable and capable sportbike for beginners and experienced riders alike.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-kawasaki-ninja-400/',
      },
      {
        model: 'Honda Rebel 300',
        description: 'A stylish and accessible cruiser for new riders.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-honda-rebel-300/',
      }
    );
  } else if (answers['budget'] === '$5,000 - $10,000') {
    recommendations.push(
      {
        model: 'Suzuki SV650',
        description: 'A versatile middleweight bike suitable for various riding styles.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-suzuki-sv650/',
      },
      {
        model: 'Triumph Street Twin',
        description: 'A modern classic with retro styling and up-to-date performance.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-triumph-street-twin/',
      }
    );
  }

  // Experience level considerations
  if (answers['experience'] === 'Beginner') {
    recommendations.push({
      model: 'Yamaha MT-03',
      description: 'A user-friendly naked bike perfect for new riders.',
      reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-yamaha-mt-03/',
    });
  } else if (answers['experience'] === 'Advanced') {
    recommendations.push({
      model: 'Aprilia RSV4',
      description: 'A high-performance superbike for experienced riders seeking top-tier performance.',
      reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2021-aprilia-rsv4/',
    });
  }

  // Ensure we always return at least three recommendations
  if (recommendations.length < 3) {
    recommendations.push(
      {
        model: 'Triumph Street Triple R',
        description: 'A well-rounded naked bike suitable for various riding styles and experience levels.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-triumph-street-triple-r/',
      },
      {
        model: 'Moto Guzzi V7 III',
        description: 'A charismatic Italian classic with modern reliability.',
        reviewLink: 'https://www.cycleworld.com/story/buyers-guide/2020-moto-guzzi-v7-iii/',
      }
    );
  }

  // Shuffle the recommendations to add variety
  return recommendations.sort(() => Math.random() - 0.5).slice(0, 4);
}