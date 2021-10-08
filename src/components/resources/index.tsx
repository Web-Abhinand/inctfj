import React from 'react';
import ResourcesLinks from "./ResourcesLinks";
import ResourcesFAQ from "./ResourcesFAQ";

const ResourcesComponent = () => {
    return (
        <div>
            <div
                className="flex items-center justify-center text-center bg-gray-900 flex-col"
                 style={{ minHeight: '40vh' }}
            >
                <h1 className="text-white">InCTF Jr. Resources</h1>
                <p className="text-white opacity-75">Get started with InCTF Jr. with our learning materials</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <ResourcesLinks />
            </div>

            <ResourcesFAQ />
        </div>
    );
};

export default ResourcesComponent;