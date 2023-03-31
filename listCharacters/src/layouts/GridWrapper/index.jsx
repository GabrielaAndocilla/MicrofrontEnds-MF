import styled from 'styled-components'

const GridWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
grid-gap:2em
`;
export default GridWrapper