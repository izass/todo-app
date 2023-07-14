import { Container, FilterItem } from "./styles"

const Filters = () => {
  return (
    <Container>
      <FilterItem href="/">All</FilterItem>
      <FilterItem href="/active">Active</FilterItem>
      <FilterItem href="complete">Complete</FilterItem>
    </Container>
  )
}

export default Filters