import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GoogleGuard } from './guards/google.guard';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

  @Get('/google')
  @UseGuards(GoogleGuard)
  @ApiResponse({ status: 200, type: String })
  googleAuth() {
    return;
  }

  @Get('google/redirect')
  @UseGuards(GoogleGuard)
  @ApiResponse({ status: 200, type: String })
  googleAuthRedirect(@Req() request) {
    return this.authService.googleRegister(request);
  }
}
