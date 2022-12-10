import { Center, VStack } from "@chakra-ui/react";
import TButton from "../../gui/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../states/process.slice";
import { wallpaper } from "../../assets/index";
import TContainer from "../../gui/Container";
import useMount from "../../hooks/helping/useMount";
import useHeader from "../../hooks/helping/useHeader";

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      reason: "visiting",
    },
    onSubmit: async (values) => {
      dispatch(login());
    },
  });

  const {changeTitle}=useHeader()
  useMount(()=>changeTitle('Welcome To The OSVerse'))

  return (
    <Center
      bgImg={wallpaper}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"100vh"}
      w={"100vw"}
    >
      <TContainer>
        <VStack w={200} p={"20px"} spacing={2}>
          <TButton
            title="Hiring"
            others={{
              w: "full",
              onClick: formik.handleSubmit,
            }}
          />
          <TButton
            title="Visiting"
            others={{
              w: "full",
              onClick: formik.handleSubmit,
            }}
          />
        </VStack>
      </TContainer>
    </Center>
  );
};

export default Login;
