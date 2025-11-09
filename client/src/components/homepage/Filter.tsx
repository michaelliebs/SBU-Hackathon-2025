const Filter = () => {
  return (
    <aside id="filter-events">
      <h3>Filter Events</h3>

      <div className="filter-group">
        <label>Tags:</label>
        <div><input type="checkbox" /> Music</div>
        <div><input type="checkbox" /> Business</div>
        <div><input type="checkbox" /> Community</div>
        <div><input type="checkbox" /> Outdoor</div>
      </div>

      <div className="filter-group">
        <label>Attendance:</label>
        <div><input type="checkbox" /> 0-50</div>
        <div><input type="checkbox" /> 51-100</div>
        <div><input type="checkbox" /> 100+</div>
      </div>

      <button>Apply Filters</button>
    </aside>
  );
};

export { Filter };