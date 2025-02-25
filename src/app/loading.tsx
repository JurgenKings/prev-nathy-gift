import Loading from "@/components/Loading"
import LoadingText from "@/components/LoadingText"

export default function LoadingPage() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-[60]" />
      <div className="fixed inset-0 flex justify-center items-center z-[70]">
        <div className="flex flex-col items-center gap-4">
          <Loading />
          <LoadingText />
        </div>
      </div>
      <div className="h-screen" />
    </>
  )
}