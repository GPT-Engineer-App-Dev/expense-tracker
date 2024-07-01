function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {/* Update with components here - default to put new layout sections as separate components in the components folder, and import them here */}
      <div>
        <h1 className="text-3xl text-center">Welcome to Expense Tracker</h1>
        <p className="text-center">
          Manage and track your expenses efficiently.
        </p>
      </div>
    </main>
  );
}

export default Index;