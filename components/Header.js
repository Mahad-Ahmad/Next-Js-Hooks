const Header = () => {
  const color = 2;
  return (
    <div className="title">
      <h1>DevPacks</h1>
      <style jsx>
        {`
          .title {
            color: ${color > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
