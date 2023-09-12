import React, { useState } from 'react';
import ExperienceSection from '@/components/main/ExperienceSection';
import ViewContainer from '../components/layout/ViewContainer';
import HeroSection from '../components/main/HeroSection';
import ProjectSection from '../components/main/ProjectSection';
import ContactSection from '../components/main/ContactSection';
import MetaHead from '../components/seo/MetaHead';
import AnimatedBg from '../components/main/AnimatedBg';

export default function Home() {

	return (
		<>
			<MetaHead />
			<AnimatedBg />
			<div className='main-view-container relative z-0'>
				<ViewContainer className="grid grid-cols-1 items-start justify-start gap-12">
					<HeroSection />
					<ExperienceSection />
					<ProjectSection />
					<ContactSection />
				</ViewContainer>
			</div>
		</>
	)
}
