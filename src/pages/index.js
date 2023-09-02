import ExperienceSection from '@/components/main/ExperienceSection';
import ViewContainer from '../components/layout/ViewContainer';
import HeroSection from '../components/main/HeroSection';

export default function Home() {
	return (
		<>
			<div className='main-view-container'>
				<ViewContainer className="grid grid-cols-1 items-start justify-start gap-12">
					<h1>Let's Begin the Journey !!</h1>
					<HeroSection />
					<ExperienceSection />
				</ViewContainer>
			</div>
		</>
	)
}
