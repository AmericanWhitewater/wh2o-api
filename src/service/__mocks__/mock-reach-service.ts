import { ReachServiceInterface } from "../reach-service"

export const mockReachService: ReachServiceInterface = {
  getReach: jest.fn(),
  updateReach: jest.fn(),
  deleteReach: jest.fn(),
  getReachesByState: jest.fn(),
  getFeatures: jest.fn(),
  getGages: jest.fn(),
}
