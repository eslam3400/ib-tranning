
import React from 'react';
import { storySlides, StorySlideCard } from '../../data/stories';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';


interface SuccessProps { onOpenStory?: (id: string) => void }


export const Success: React.FC<SuccessProps> = ({ onOpenStory }) => {
	// Animated counters for statistics
	const { count: goalsCount, elementRef: goalsRef } = useAnimatedCounter({ end: 1000, duration: 2500 });
	const { count: ratingCount, elementRef: ratingRef } = useAnimatedCounter({ end: 50, duration: 2000, delay: 300 });

	return (
		<section id="success" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
					<p className="text-sm text-center text-gray-500 mt-4 italic ar">قصص النجاح الحقيقية - تحويلات مذهلة من عملائنا</p>
					{/* Stats Section with improved spacing and animation */}
					<div className="my-12 flex justify-around items-center max-w-2xl mx-auto">
						<div className="text-center transform hover:scale-105 transition-transform duration-300">
							<div ref={goalsRef} className="text-3xl md:text-4xl font-bold text-green-500 mb-1">
								{goalsCount}+
							</div>
							<div className="text-sm md:text-base text-gray-600 ar font-medium">تحقيق الأهداف</div>
							<div className="text-xs text-gray-500 mt-1">Goals Achieved</div>
						</div>
						<div className="hidden md:block w-px h-16 bg-gray-300"></div>
						<div className="text-center transform hover:scale-105 transition-transform duration-300">
							<div ref={ratingRef} className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">
								{(ratingCount / 10).toFixed(1)}★
							</div>
							<div className="text-sm md:text-base text-gray-600 ar font-medium">رضا العملاء</div>
							<div className="text-xs text-gray-500 mt-1">Customer Satisfaction</div>
						</div>
					</div>
				</div>

				{/* Horizontally scrollable success stories */}
				<div className="overflow-x-auto pb-4">
					<div className="flex gap-6 min-w-[320px] md:min-w-0">
						{storySlides.flat().map(card => (
							<div key={card.id} className="flex-shrink-0 w-80 max-w-full">
								<StoryCard card={card} onOpenStory={onOpenStory} />
							</div>
						))}
					</div>
				</div>

				{/* Total count */}
				<div className="text-center mt-4">
					<span className="text-sm text-gray-500">
						Showing {storySlides.flat().length} success stories
					</span>
				</div>
			</div>
		</section>
	);
};


function StoryCard({ card, onOpenStory }: { card: StorySlideCard; onOpenStory?: (id: string) => void }) {
	return (
		<div
			onClick={() => onOpenStory?.(card.id)}
			className={`rounded-xl p-6 card-hover border cursor-pointer bg-gradient-to-br ${card.gradient} border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm h-full flex flex-col`}
		>
			{/* Header with Profile and Info */}
			<div className="flex items-center mb-4">
				<div className={`w-12 h-12 bg-gradient-to-r ${card.profileColor} rounded-full flex items-center justify-center text-white font-semibold text-xs overflow-hidden flex-shrink-0`}>
					{card.profileType === 'img' && card.avatar ? (
						<img
							src={card.avatar}
							alt={card.name}
							className={`w-full h-full object-cover rounded-full ${card.gender === 'female' ? 'female-image-blur' : ''}`}
						/>
					) : (
						<span>{card.initials || card.name[0]}</span>
					)}
				</div>
				<div className="ml-4 flex-1 min-w-0">
					<h4 className="font-semibold text-gray-900 text-base truncate">
						{card.name} - <span className="ar">{card.arabicName}</span>
					</h4>
					<p className="text-gray-600 text-sm truncate">
						{card.age} years, {card.country} | <span className="ar">{card.countryArabic}</span>
					</p>
				</div>
			</div>

			{/* Progress Bar */}
			<div className="mb-4">
				<div className="w-full bg-gray-200 rounded-full h-2">
					<div className={`bg-gradient-to-r ${card.profileColor} h-2 rounded-full transition-all duration-500`} style={{ width: `${card.progressWidth}%` }}></div>
				</div>
			</div>

			{/* Main Achievement */}
			<div className="mb-3 flex-grow">
				<p className="font-semibold text-gray-900 text-sm line-clamp-2">{card.mainAchievement}</p>
				<p className="text-xs text-gray-600 italic line-clamp-2">{card.summary}</p>
			</div>

			{/* Motivational Quote */}
			<div className="mb-4 flex-grow">
				<p className="text-sm text-gray-700 ar italic mb-1 leading-relaxed line-clamp-2">&ldquo;{card.motivationalQuote}&rdquo;</p>
				<p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{card.motivationalQuoteArabic}</p>
			</div>

			{/* Star Rating */}
			<div className="mb-4 flex items-center">
				{[...Array(card.rating)].map((_, i) => (
					<span key={i} className="text-yellow-400 text-base">★</span>
				))}
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-2">
				{card.tags?.slice(0, 3).map(tag => (
					<span key={tag} className="bg-white/60 px-3 py-1 rounded-full text-xs text-gray-700 font-medium border border-white/40">
						{tag}
					</span>
				))}
				{card.tags && card.tags.length > 3 && (
					<span className="text-xs text-gray-500">+{card.tags.length - 3} more</span>
				)}
			</div>
		</div>
	);
}
