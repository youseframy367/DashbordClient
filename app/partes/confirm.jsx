import { useState } from "react";

export default function Confirm({
  title = "Confirm Action",
  supTitle = "Are you sure you want to delete this item?",
  api = "",
  close,
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(api, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      close?.();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1F2033]">

      <div className="flex flex-col justify-between h-[188px] w-[90%] max-w-[786px] rounded-[20px] bg-[#6E748533] shadow-[0_4px_4px_#FFFFFF1A] p-[20px]">

        {/* Text */}
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-semibold text-[24px] font-nunito">{title}</h3>
          <p className="font-semibold text-[18px] font-nunito">{supTitle}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-[15px]">

          {/* Cancel */}
          <button
            onClick={close}
            className="font-roboto cursor-pointer w-[90px] h-[48px] flex justify-center items-center border-[0.5px] rounded-[8px] text-[16px] font-medium border-[#ffffff7c]"
          >
            Cancel
          </button>

          {/* Confirm */}
          <button
            onClick={handleDelete}
            disabled={loading}
            className="font-roboto cursor-pointer w-[90px] h-[48px] flex justify-center items-center rounded-[8px] bg-gradient-to-b from-[#CF1D20] to-[#081028] text-white disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Confirm"}
          </button>

        </div>

      </div>
    </div>
  );
}