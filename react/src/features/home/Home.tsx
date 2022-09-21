import * as React from 'react';

const Home = (): JSX.Element => {
    return (
        <div className="bg-gray-50 home-wrapper">
            <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-primary">
                        Variety of contents,
                    </span>
                    <span className="block text-indigo-600">
                        as per your need and choice.
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            Request content
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
