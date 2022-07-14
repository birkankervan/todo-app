const Edit = ({ width = 48, height = 48 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} width={height}>
      <path d="M24 42v-3.55l10.8-10.8 3.55 3.55L27.55 42ZM6 31.5v-3h15v3Zm34.5-2.45-3.55-3.55 1.45-1.45q.4-.4 1.05-.4t1.05.4l1.45 1.45q.4.4.4 1.05t-.4 1.05ZM6 23.25v-3h23.5v3ZM6 15v-3h23.5v3Z" />
    </svg>
  );
};

export default Edit;