const TableHeader = ({ headings }) => {
  const headingItems = headings.map((heading) => (
    <th key={heading}>{heading}</th>
  ));
  return (
    <thead>
      <tr className="tableRow">{headingItems}</tr>
    </thead>
  );
};

export default TableHeader;
