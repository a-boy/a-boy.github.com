---
title: 编程学习笔记-WSL-Jekyll
date: 2025-06-28
author: Cody Luo
comments: true
tags: [编程, 笔记]
---

## WSL
<https://learn.microsoft.com/en-us/windows/wsl/basic-commands>

```
wsl --install  

wsl --list --online
PS C:\Users\PC> wsl -l -o
以下是可安装的有效分发的列表。
使用“wsl.exe --install <Distro>”安装。

NAME                            FRIENDLY NAME
AlmaLinux-8                     AlmaLinux OS 8
AlmaLinux-9                     AlmaLinux OS 9
AlmaLinux-Kitten-10             AlmaLinux OS Kitten 10
AlmaLinux-10                    AlmaLinux OS 10
Debian                          Debian GNU/Linux
FedoraLinux-42                  Fedora Linux 42
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
SUSE-Linux-Enterprise-15-SP7    SUSE Linux Enterprise 15 SP7
Ubuntu                          Ubuntu
Ubuntu-24.04                    Ubuntu 24.04 LTS
archlinux                       Arch Linux
kali-linux                      Kali Linux Rolling
openSUSE-Tumbleweed             openSUSE Tumbleweed
openSUSE-Leap-15.6              openSUSE Leap 15.6
Ubuntu-18.04                    Ubuntu 18.04 LTS
Ubuntu-20.04                    Ubuntu 20.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_7                 Oracle Linux 8.7
OracleLinux_9_1                 Oracle Linux 9.1

wsl.exe --install -d <Distribution Name>

wsl -l -v
wsl --set-default <DistributionName>

wsl --update

wsl hostname -I: Returns the IP address of your Linux distribution installed via WSL 2 (the WSL 2 VM address)
ip route show | grep -i default | awk '{ print $3}': Returns the IP address of the Windows machine as seen from WSL 2 (the WSL 2 VM)

wsl --unregister <DistributionName>
wsl --uninstall
wsl --help

```

## Ruby Jekyll theme mimima
<https://www.ruby-lang.org/en/documentation/quickstart/>
```
sudo apt update
sudo apt upgrade
sudo apt install build-essential
sudo apt install clang make ruby-dev libffi-dev
sudo apt-get install ruby-full
```

If you’re using Linux, open up a shell and type irb and hit enter.
irb(main):002:0> puts "Hello World"
Hello World
=> nil

irb(main):006:0> Math.sin(1)
=> 0.8414709848078965

  gem install bundler jekyll

  jekyll new weed

  cd weed

  bundle exec jekyll serve

    # => Now browse to http://localhost:4000

