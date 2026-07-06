export class ImpactOSError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "ImpactOSError";
  }
}

export class ImpactOSValidationError extends ImpactOSError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "IMPACTOS_VALIDATION_ERROR", details);
    this.name = "ImpactOSValidationError";
  }
}

export class ImpactOSRegistryError extends ImpactOSError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "IMPACTOS_REGISTRY_ERROR", details);
    this.name = "ImpactOSRegistryError";
  }
}
