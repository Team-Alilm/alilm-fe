interface SwitchCaseProps<Case extends string | number> {
  caseBy: Partial<Record<Case, JSX.Element | null>>;
  value: Case;
  defaultComponent?: JSX.Element | null;
}

const SwitchCase = <Case extends string | number>({
  value,
  caseBy,
  defaultComponent: defaultComponent = null,
}: SwitchCaseProps<Case>) => {
  if (value === null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
};

export default SwitchCase;
