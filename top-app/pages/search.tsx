import { Button, Htag, P, Tag } from "../components";
import { withLayout } from "../layout/Layout";

function Search() {
  return (
    <>
      <Button appearence='primary' arrow="right">Button</Button>
      <Button appearence='ghost' arrow="down">Button</Button>
      <P size='l'>test text</P>
      <P>test text</P>
      <P size='s'>test text</P>
      <Tag size='s'>ghost</Tag>
      <Tag size='m'>ghost</Tag>
      <Tag size='s' color='green'>green</Tag>
      <Tag size='s' color='grey'>gray</Tag>
      <Tag size='s' color='red'>red</Tag>
      <Tag size='s' color='primary' href='3'>primary</Tag>
    </>
  )
}
export default withLayout(Search)