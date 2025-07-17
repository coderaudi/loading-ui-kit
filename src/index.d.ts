import React from 'react';

export interface LoadingProps {
	loading: boolean;
	textBelowLoadingCircle?: string;
	logoInsideLoadingCircle?: React.ReactNode;
}

declare const Loading: React.FC<LoadingProps>;

export default Loading;
