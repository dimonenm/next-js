import { Button, Htag, P, Tag } from "../../components";
import { withLayout } from "../../layout/Layout";

function Courses() {
  return (
    <>
      <Button appearence='primary' arrow="right">Button</Button>
      <Button appearence='ghost' arrow="down">Button</Button>
    </>
  )
}
export default withLayout(Courses)