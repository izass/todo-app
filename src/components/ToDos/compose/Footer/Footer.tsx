import Filters from "./compose/Filters/Filters"
import { Button, Container } from "./styles"

type Props = {
  itemsNumber: number
}

const Footer = ({ itemsNumber = 1 }: Props) => {
  const displayItemsNumber = () => {
    return itemsNumber === 1 ? `${itemsNumber} item left` : `${itemsNumber} items left`
  }

  return (
    <Container>
      <div>{displayItemsNumber()}</div>
      <Filters />
      <Button>Clear Completed</Button>
    </Container>
  )
}

export default Footer