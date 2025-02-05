# 命令参数

::: tip
Xray 使用 Go 风格的命令及参数
:::

## 获取基本命令

您可以运行 `xray help` 来获得所有 xray 最基础的用法, 以及可用的命令及说明。

```
Xray is a platform for building proxies.

Usage:

        xray <command> [arguments]

The commands are:

        run          Run Xray with config, the default command
        version      Show current version of Xray
        api          Call an API in an Xray process
        tls          TLS tools
        uuid         Generate UUIDv4 or UUIDv5
        x25519       Generate key pair for x25519 key exchange
        wg           Generate key pair for wireguard key exchange

Use "xray help <command>" for more information about a command.

```

### xray run

指定一个或多个配置文件，并运行。

使用方法:

```
 xray run [-c config.json] [-confdir dir]
```

```
Run Xray with config, the default command.

The -config=file, -c=file flags set the config files for
Xray. Multiple assign is accepted.

The -confdir=dir flag sets a dir with multiple json config

The -format=json flag sets the format of config files.
Default "auto".

The -test flag tells Xray to test config files only,
without launching the server
```

::: tip
配置文件除了默认的 JSON 格式外，也可以使用 TOML 和 YAML。在不指定格式的前提下会通过文件扩展名识别。
:::

```
 xray run -dump
```

用以输出多文件配置融合之后的结果。

### xray version

输出 Xray 版本、 Golang 版本等信息。

使用方法:

```
 xray version
```

### xray api

调用 Xray 的 gRPC API，需要在配置文件中开启。

使用方法:

```
xray api <command> [arguments]
```

```
        restartlogger Restart the logger
        stats         Get statistics
        statsquery    Query statistics
        statssys      Get system statistics
        adi           Add inbounds
        ado           Add outbounds
        rmi           Remove inbounds
        rmo           Remove outbounds
```

### xray tls

一些与 TLS 相关的工具。

使用方法:

```
xray tls <command> [arguments]
```

```
        cert          Generate TLS certificates
        ping          Ping the domain with TLS handshake
        certChainHash Calculate TLS certificates hash.
```

### xray uuid
生成 UUID。

使用方法:

```
xray uuid [-i "example"]
```

### xray x25519
生成 x25519 密钥对。

使用方法:

```
xray x25519 [-i "(base64.RawURLEncoding)" --std-encoding ]
```

### xray wg
生成 wireguard curve25519 密钥对。

使用方法:

```
xray wg [-i "(base64.StdEncoding)"]
```

::: tip
当 `-config` 没有指定时，Xray 将先后尝试从以下路径加载 `config.json` :

- 工作目录（Working Directory）
- [环境变量](../config/features/env.md#资源文件路径)中 `Xray.location.asset` 所指定的路径
  :::


