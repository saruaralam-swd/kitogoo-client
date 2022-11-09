import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Kirogoo`
  }, [title])
};

export default useTitle;