import React, { useState } from "react";
import { Api } from "../utils/api";
import { notify } from "../utils/notification";

export default function StatusBtn({ status, id, table }) {
  const [state, setState] = useState(status);

  const updateStatus = (val) => {
    Api("/admin/updateStatus", { table, id, val }, (res) => {
      const { success } = res;
      if (success) {
        notify("info", "Updated!");
        setState(state === 1 ? 0 : 1);
      }
    });
  };
  return (
    <div>
      {state === 1 ? (
        <span
          className="badge bg-label-primary me-1"
          onClick={() => updateStatus(0)}
        >
          Active
        </span>
      ) : state === 3 ? null : (
        <span
          className="badge bg-label-danger me-1"
          onClick={() => updateStatus(1)}
        >
          Blocked
        </span>
      )}
    </div>
  );
}
