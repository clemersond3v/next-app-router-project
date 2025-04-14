'use client';

import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
    useEffect(() => {
        if (title) {
        document.title = title;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const newMeta = document.createElement('meta');
                newMeta.name = 'description';
                newMeta.content = description;
                document.head.appendChild(newMeta);
            }
        }
    }, [title, description]);

    return null;
};

export default Seo;
