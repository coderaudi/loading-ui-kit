import React from 'react';

export default function LoadingComponent({ loading, textBelowLoadingCircle, logoInsideLoadingCircle }) {
	if (!loading) return null;

	return (
		<div style={{ textAlign: 'center', padding: '2rem' }}>
			<div style={{
				width: 60,
				height: 60,
				borderRadius: '50%',
				border: '5px solid #ccc',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				margin: '0 auto'
			}}>
				{logoInsideLoadingCircle || <div style={{ fontSize: 24 }}>🔄</div>}
			</div>
			{textBelowLoadingCircle && <p style={{ marginTop: '1rem' }}>{textBelowLoadingCircle}</p>}
		</div>
	);
}
