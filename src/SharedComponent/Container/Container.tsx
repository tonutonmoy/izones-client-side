const Container = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" w-[90%] 3xl:w-[70%] mx-auto my-10">
      {children}
    </div>
  );
};

export default Container;