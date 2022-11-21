import Spinner from './Spinner';

export default function Loading() {
    return (
        <div id="not-found" className="my-4 bg-white">
            <div className="text-center">
                <Spinner />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Loading
                </h1>

                <p className="mt-4 text-gray-500">
                    Please wait while we load the data.
                </p>
            </div>
        </div>
    );
}
