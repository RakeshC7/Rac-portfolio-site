import React from 'react';
import ExperienceSection from '@/components/main/ExperienceSection';
import ViewContainer from '../components/layout/ViewContainer';
import HeroSection from '../components/main/HeroSection';
import ContactSection from '../components/main/ContactSection';
import MetaHead from '../components/seo/MetaHead';
import AnimatedBg from '../components/main/AnimatedBg';

export default function Home() {
	return (
		<>
			<MetaHead />
			<AnimatedBg />
			<div className='main-view-container relative z-0'>
				<ViewContainer className="px-1 pb-10 bg-white grid grid-cols-1 items-start justify-start gap-12">
					<h1>{process.env.NEXT_PUBLIC_RAKESH}</h1>
					<HeroSection />
					<ExperienceSection />
					{/* <ProjectSection /> */}
					<ContactSection />
				</ViewContainer>
			</div>
		</>
	)
}
