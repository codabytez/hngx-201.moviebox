const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="flex justify-center items-center gap-6">
        <h2 className="text-2xl font-bold">Loading...</h2>
        <div className="animate-spin">
          <div className="rounded-full h-12 w-12 border-b-4 border-r-4 border-blue-700"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
