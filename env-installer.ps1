# Note: if you get an error you might need to change the execution policy (i.e. enable Powershell) with Set-ExecutionPolicy RemoteSigned -scope CurrentUser
# 首次运行脚本需要手动在powershell中执行下一行代码，然后回答yes即可
# Set-ExecutionPolicy RemoteSigned -s cu -force
Set-ExecutionPolicy RemoteSigned -scope CurrentUser -force

# 安装scoop
if(Get-Command "scoop" -errorAction SilentlyContinue) {
    "scoop already installed"
} else {
    iwr -useb get.scoop.sh | iex
}

# 安装依赖
scoop install git
# 添加scoop bucket
scoop bucket add extras

# 安装命令行工具
scoop install nvm

# 配置命令行工具
if(Get-Command "npm" -errorAction SilentlyContinue) {
    "npm already installed"
} else {
    nvm install latest
    nvm on
}
