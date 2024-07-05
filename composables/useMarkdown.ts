import { marked } from "marked"

export default function () {
  const render = (mdString: string) => {
    return marked.parse(mdString)
  }

  return {
    render
  }
}