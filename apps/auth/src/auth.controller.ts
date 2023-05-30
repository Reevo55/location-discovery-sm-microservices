import { Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AuthController {
  @ApiOkResponse({ description: 'Login' })
  @Post('login')
  login() {
    return 'login';
  }

  @ApiOkResponse({ description: 'Logout' })
  @Post('logout')
  logout() {
    return 'logout';
  }

  @ApiOkResponse({ description: 'Register' })
  @Post('register')
  register() {
    return 'register';
  }

  @ApiOkResponse({ description: 'Forgot password' })
  @Post('forgot-password')
  forgotPassword() {
    return 'forgot password';
  }

  @ApiOkResponse({ description: 'Reset password' })
  @Post('reset-password')
  resetPassword() {
    return 'reset password';
  }

  @ApiOkResponse({ description: 'Change password' })
  @Post('change-password')
  changePassword() {
    return 'change password';
  }

  @ApiOkResponse({ description: 'Verify email' })
  @Post('verify-email')
  verifyEmail() {
    return 'verify email';
  }

  @ApiOkResponse({ description: 'Resend verification email' })
  @Post('resend-verification-email')
  resendVerificationEmail() {
    return 'resend verification email';
  }
}
