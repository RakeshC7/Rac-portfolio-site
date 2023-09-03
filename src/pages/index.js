import ExperienceSection from '@/components/main/ExperienceSection';
import ViewContainer from '../components/layout/ViewContainer';
import HeroSection from '../components/main/HeroSection';
import ProjectSection from '../components/main/ProjectSection';
import ContactSection from '../components/main/ContactSection';

export default function Home() {
	return (
		<>
			<div className='main-view-container'>
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
