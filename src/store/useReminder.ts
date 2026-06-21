import { create } from "zustand";

type ReminderState = {
  open: boolean;
  patientName: string;
  medication: string;
  dosage: string;
  time: string;
  sequenceLabel: string;
  openReminder: (opts?: Partial<ReminderState>) => void;
  closeReminder: () => void;
};

export const useReminder = create<ReminderState>((set) => ({
  open: false,
  patientName: "王大爷",
  medication: "美多巴 (Levodopa)",
  dosage: "1 片 · 250mg",
  time: "09:30",
  sequenceLabel: "第二次",
  openReminder: (opts) =>
    set((s) => ({
      open: true,
      ...opts,
      patientName: opts?.patientName ?? s.patientName,
      medication: opts?.medication ?? s.medication,
      dosage: opts?.dosage ?? s.dosage,
      time: opts?.time ?? s.time,
      sequenceLabel: opts?.sequenceLabel ?? s.sequenceLabel,
    })),
  closeReminder: () => set({ open: false }),
}));
